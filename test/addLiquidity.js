const ElCartelElite = artifacts.require("ElCartelElite");

contract("ElCartelElite", function(accounts){

  it("ElCartelElate has 100000000 tokens", function(){
    return ElCartelElite.deployed().then(function(instance){
      return instance.balance.call(accounts[0]);
    }).then(function(balance){
      assert.equal(balance.valueOf(), 100000000, "Wrong number of tokens!")
    });
  });

})