app.factory("fac",($http,$q,URL)=>{
 return{
       fetch(){
        let defer = $q.defer();

        $http.get(URL).then((data)=>{
            defer.resolve(data);   
        },(error)=>{
            defer.reject(error);
        });

        return defer.promise;
      }
}
})