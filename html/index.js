angular.module('myApp', [])
  .controller('mycon', class {
    constructor($http, $scope) {
      this.$http = $http;
      this.$scope = $scope;
      this.time = 3000;
      this.result = {};
    }
    send() {
      this.$http.get(`/api?time=${this.time}`).then(res => {
        this.result = res.data;
        console.log('send()', this.$http.result);
      });
    }
    sendFast() {
      this.$http.get(`/api?time=${this.time / 1000}`).then(res => {
        this.result = res.data;
        console.log('sendFast()', this.$http.result);
      });
    }
    sendAnother() {
      this.$http.get(`/another?time=${this.time}`).then(res => {
        this.result = res.data;
        console.log('sendAnother()', res.data);
      });
    }
    fetch() {
      fetch(`/api?time=${this.time}`)
        .then(res => res.json())
        .then(body => {
          this.result = body;
          console.log('fetch()', body)
          this.$scope.$digest();
        });
      
    }
  })
