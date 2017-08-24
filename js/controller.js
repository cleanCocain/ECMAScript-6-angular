
let HTTP = new WeakMap();
let id = new WeakMap();
let name = new WeakMap();
let country = new WeakMap();
let email = new WeakMap();


class Mycontroller {

    constructor($http, $scope) {
        // super(id,name,country,email);
        // alert('Hello!');
        
        HTTP.set(this, $http);
        this.$scope = $scope;
        this.chkdata();
        this.fieldData();
        this.fieldUpdateData();
    }

    fieldData() {
        id.set(this,id);
        name.set(this,name);
        country.set(this,country);
        email.set(this,email);
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
        HTTP.get(this).get(myURL).then(responce => {

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
        // this.fieldData();
        let body = `id=${id.get(this)}&name=${name.get(this)}&country=${country.get(this)}
        &email=${email.get(this)}`;

        HTTP.get(this).post(`http://localhost:1337/user/create?${body}`).then(data =>{
            alert('data added');this.init();}).catch(data =>{
                alert('error');});
        ;

        console.log(body);
        // console.log(id.get(this));
        // console.log(name.get(this));
        // console.log(id.get(this));
        // console.log(id.get(this));
      
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

        HTTP.get(this).post(`http://localhost:1337/user/update/${body}`).then(data =>{
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
        HTTP.get(this).delete(`http://localhost:1337/user?id=${index}`).then(data =>{
            alert('Successfully Deleted');
            this.init();
        }).catch(data =>{
            alert('error');
        })       
    }

}

export { Mycontroller }
