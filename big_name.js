var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var firstFive = friends.slice(0, 5);

firstFive.forEach(function(name) {
  console.log(name + " has " + name.length + " letters");
});
