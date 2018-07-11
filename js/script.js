let app = new Vue({
  el: '#entities',
  data: {
    entities: entities,
    columns: [
      { title: 'html',        active: true },
      { title: 'symbol',      active: true },
      { title: 'numeric',     active: true },
      { title: 'description', active: true },
      { title: 'hex',         active: true },
      { title: 'css',         active: true },
      { title: 'js',          active: true },
    ],
  },
  computed: {
    count() {
      return this.entities.length;
    },
    columnHtml() {
        return this.columns.find(item => item.title === 'html').active;
    },
    countLikes() {
        return this.likedEntities.length;
    },
    hasLikes() {
      return (this.countLikes > 0);
    },
    activeColumns() {
        const cols = Array.from(this.columns);
        return cols.filter(column => column.active);
    },
    countColumns() {
        return this.activeColumns.length + 1;
    },
    likedEntities() {
        const list = Array.from(this.entities);
        return list.filter(entity => entity.like);
    }
  },
  methods: {
    toggleCol(column){
        column.active = !column.active;
    },
    activeColumn(name) {
        let active = false;
        if (this.columns.find(item => item.title === name) !== undefined) {
            active = this.columns.find(item => item.title === name).active;
        }
        return active;
    },
    like(entitie) {
      if ( entitie.like === false ) {
        entitie.like = true;
      } else {
        entitie.like = false;
      }
      // entitie.like = !entitie.like;
    },
    likeCaption(entitie) {
        const caption = entitie.like ? 'unlike' : 'like';
        return caption;
    },
    copy(e) {
      let text = e.target;

      let selection = window.getSelection();
      let range     = document.createRange();

      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand( 'copy' );
      selection.removeAllRanges();
      document.getElementById('overlay-notification').classList.add('visible')
      setTimeout(function(){
        document.getElementById('overlay-notification').classList.remove('visible')
      }, 1000);
    }
  },
  mounted() {
    console.log('App mounted!');

    // get liked entities from local storage
    if (localStorage.getItem('entities')) {
      const load = JSON.parse(localStorage.getItem('entities'));
      let newEntities = this.entities;

      newEntities.forEach( (entitie, i) => {
        newEntities[i].like = load[i].like;
      });
    }

    // get active columns from local storage
    if (localStorage.getItem('columns')) this.columns = JSON.parse(localStorage.getItem('columns'));
  },
  watch: {
    likedEntities: {
      handler() {
        console.log('entities changed!');
        let save = this.entities.map( (entitie) => {return {like: entitie.like}} );
        localStorage.setItem('entities', JSON.stringify(save));
      },
      deep: true,
    },
    columns: {
      handler() {
        console.log('columns changed!');
        localStorage.setItem('columns', JSON.stringify(this.columns));
      },
      deep: true,
    },
  }
});
