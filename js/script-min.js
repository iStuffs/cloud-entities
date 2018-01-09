let app = new Vue({
  el: '#entities',
  data: {
    entities: entities,
    countLikes: 0,
    columns: {
      'html': true,
      'symbol': true,
      'numeric': true,
      'description': true,
      'hex': true,
      'css': true,
      'js': true
    },
    countColumns: 7
  },
  computed: {
    count() {
      return this.entities.length;
    },
    hasLikes() {
      return (this.countLikes > 0);
    }
  },
  methods: {
    toggleCol(column){
      if (this.columns[column]) {
        this.countColumns--;
      } else {
        this.countColumns++;
      }
      this.columns[column] = !this.columns[column]
    },
    like(entitie) {
      if ( entitie.like === false ) {
        entitie.like = true;
        this.countLikes++;
      } else {
        entitie.like = false;
        this.countLikes--;
      }
      // entitie.like = !entitie.like;
      // entitie.like ? (entities.countLikes++) : (entities.countLikes--);
    },
    likeCaption(entitie) {
      let caption = 'Like';
      if(entitie.like) {
        caption = 'unLike';
      }
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

    if (localStorage.getItem('entities')) {
      load = JSON.parse(localStorage.getItem('entities'));
      let newEntities = this.entities;
      newEntities.forEach( (entitie,i) => {
        newEntities[i].like = load[i].like;
      });
    }
    if (localStorage.getItem('columns')) this.columns = JSON.parse(localStorage.getItem('columns'));

    let count = 0;
    for (let key in this.columns) {
      if (this.columns[key]) {
        count++;
      }
    }
    this.countColumns = count;

    count = 0;
    this.entities.forEach( (entitie) => {
      if (entitie.like) { count ++; }
    });
    this.countLikes = count;

  },
  watch: {
    entities: {
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


