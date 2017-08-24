import User_Data from './user_data';



let HTTP = new WeakMap();
let result = [];

class Mycontroller {

    constructor($http, $scope) {
        // super(id,name,country,email);
        // alert('Hello!');
        
        HTTP.set(this, $http);
        this.$scope = $scope;
        this.chkdata();
        this.fieldData();
        this.fieldUpdateData();
        // this.test();
    }

    // test(){
    //     this.fieldData();
    //     let obj = new User_Data();
    //     obj.setID(this.id);
    //     obj.setName(this.name);
    //     obj.setCountry(this.country);
    //     obj.setEmail(this.email);
    //     alert(`${obj.getID}\n${obj.getName}\n${obj.getCountry}\n${obj.getEmail}\n`);
    // }

    fieldData() {
        this.id;
        this.name;
        this.country;
        this.email;  
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


    init() {

        const myURL = 'http://localhost:1337/user';

        // var result = [];
        // let result = {id:'',name:'',country:'',email:''};
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
        this.fieldData();
        // if(this.id  || this.name || this.country|| this.email ){

        //     alert('some data missing please check fields.');
        // }else{
                let body = `id=${this.id}&name=${this.name}&country=${this.country}
                &email=${this.email}`;
        
                HTTP.get(this).post(`http://localhost:1337/user/create?${body}`).then(data =>{
                    alert('Data added successfully !');this.init();
                    this.id = null;
                    this.name = null;
                    this.country = null;
                    this.email = null;
                
                }).catch(data =>{
                        });
                ;

               
        
                // console.log(body);
                console.log(this.id);
                console.log(this.name);
                console.log(this.country);
                console.log(this.email);
            // }
  
      
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
            alert('data updated');this.init();

            this.idu = null;
            this.nameu = null;
            this.countryu = null;
            this.emailu = null;
        
        }).catch(data =>{
                alert('error');});
        ;

        // this.fieldUpdateData();
    
        console.log(body);
        console.log(this.idu);
        console.log(this.nameu);
        console.log(this.countryu);
        console.log(this.emailu);
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
