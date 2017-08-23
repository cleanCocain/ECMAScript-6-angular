

class Mycontroller {

    constructor($http, $scope) {
        // super(id,name,country,email);
        // alert('Hello!');
        
        this.$http = $http;
        this.$scope = $scope;
        this.chkdata();
        this.fieldData();
        this.fieldUpdateData();
    }

    fieldData() {
        this.id = null;
        this.name = null;
        this.country = null;
        this.email = null;  
    }
    fieldUpdateData() {
        this.idu;
        this.nameu;
        this.countryu;
        this.emailu;  
    }
    chkdata() {
     
        this.httpData = [];
        this.tableData = [];
    }

    // getid() {

    //     const myURL = 'http://localhost:1337/user';
    //     var str = [];
    //     let count = 0;
    //     this.$http.get(myURL).then(responce => responce.data)
    //         .then(users => {

    //             users.forEach(element => {
    //                 count++;
    //                 str.push(element);
    //                 // console.log(str);
    //                 // console.log(count);
    //             });
    //             // console.log(str);
    //             str = this.data;
    //             return this.data;

    //         });


    //     // alert(str); 
    //     alert(str);
    // }

    init() {

        const myURL = 'http://localhost:1337/user';

        // var result = [];
        // let result = {id:'',name:'',country:'',email:''};
        let result = [];
        this.$http.get(myURL).then(responce => {

            result = responce.data;

            // users.forEach(element => {

            // result.push(element);
            // console.log(str);
            // console.log(count);
            // });
            // console.log(result);
            this.httpData = JSON.stringify(result);
            this.tableData = result;

        });
        console.log(result);
        
    }

    saveUser(){
        this.fieldData();
        let body = `id=${this.id}&name=${this.name}&country=${this.country}
        &email=${this.email}`;

        this.$http.post(`http://localhost:1337/user/create?${body}`).then(data =>{
            alert('data added');this.init();}).catch(data =>{
                alert('error');});
        ;

        console.log(body);
        console.log(this.id);
        console.log(this.name);
        console.log(this.country);
        console.log(this.email);
      
    }

    editUser(index){
       this.fieldUpdateData();
        console.log(index);
        this.idu = this.tableData[index].id;
        this.nameu = this.tableData[index].name;
        this.countryu = this.tableData[index].country;
        this.emailu = this.tableData[index].email;
        
    }

    updateUser(){
        this.fieldUpdateData();
        let body = `${this.idu}?name=${this.nameu}&country=${this.countryu}
        &email=${this.emailu}`;

        this.$http.post(`http://localhost:1337/user/update/${body}`).then(data =>{
            alert('data updated');this.init();}).catch(data =>{
                alert('error');});
        ;

        // this.fieldUpdateData();
        this.idu = null;
        this.nameu = null;
        this.countryu = null;
        this.emailu = null;

        // console.log(body);
        // console.log(this.idu);
        // console.log(this.nameu);
        // console.log(this.countryu);
        // console.log(this.emailu);
    }

    deleteUser(index){
        console.log(index); 
        this.$http.delete(`http://localhost:1337/user?id=${index}`).then(data =>{
            alert('Successfully Deleted');
            this.init();
        }).catch(data =>{
            alert('error');
        })       
    }

}

export { Mycontroller }