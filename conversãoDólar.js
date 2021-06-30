(function() {
    const conversão = valor => {
        return `R$ ${(valor*5.07).toString().replace('.', ',')}`
    }
    console.log(conversão(3));
})();