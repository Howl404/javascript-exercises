const getTheTitles = function (object) {
  let final = [];
  for (let i = 0; i < object.length; i++) {
    final.push(object[i].title);
  }
  return final;
};

// Do not edit below this line
module.exports = getTheTitles;
