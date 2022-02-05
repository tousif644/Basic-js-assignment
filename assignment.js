// Problem - 1
function anaToVori(ana) {
  var vori = ana / 16;
  return vori;
}
anaToVori();

// Problem - 2
function pandaCost(singara_quantity, samosa_quantity, jilapi_quantity) {
  const singara_price = 7;
  const samosa_price = 10;
  const jilapi_price = 15;

  var total_singara = singara_price * singara_quantity;
  var total_samosa = samosa_price * samosa_quantity;
  var total_jilapi = jilapi_price * jilapi_quantity;

  let total_price = total_singara + total_samosa + total_jilapi;

  return total_price;
}

pandaCost();

// Problem - 3
function picnicBudget(totalPerson) {
  if (totalPerson <= 100) {
    return 5000;
  } else if (totalPerson >= 101 && totalPerson <= 200) {
    return 4000;
  } else if (totalPerson >= 201) {
    return 3000;
  }
}

picnicBudget();

// Problem - 4
function oddFriend(names) {
  let odd_friend = [];
  for (let i = 0; i < names.length; i++) {
    let temp = names[i].length;
    if (temp % 2 == 1) {
      odd_friend.push(names[i]);
    }
  }
  return odd_friend;
}

oddFriend();
