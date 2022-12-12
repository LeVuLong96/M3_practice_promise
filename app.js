function SinhNhat (coBanh) {
    return new Promise(function (resolve, reject) {
        setTimeout( () => {
            if (coBanh) {
                resolve(3);
            } else {
                reject ("toi da het")
            }
        },3000)
    })
}

SinhNhat(false)
    .then((resolve) => {
        console.log(`toi co ${resolve} cai banh`);
    })
    .catch((err) =>{
        console.log(err)
    })
    .finally(()=> {
        console.log('da xu ly')
    })
