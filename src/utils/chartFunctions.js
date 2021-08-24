// [0-17, 19-29, 30-39, 40-49, 50-59, 60+]
let ageGroupsCount = [0, 0, 0, 0, 0, 0];

// [single, fully, not]
let vaccinationsCount = [0, 0, 0];

// [wft, visiting, both]
let workPlanCount = [0, 0, 0];

// [avoided, sometimes]
let publicCount = [0, 0];
let friendsCount = [0, 0];
let maskCount = [0, 0];

export const maskResult = (data, reset) => {
  reset && (maskCount = [0, 0]);

  switch (data) {
    case "always":
      maskCount[0]++;
      break;
    case "sometimes":
      maskCount[1]++;
      break;
    default:
      break;
  }

  return maskCount;
};

export const friendsResult = (data, reset) => {
  reset && (friendsCount = [0, 0]);

  switch (data) {
    case "avoided":
      friendsCount[0]++;
      break;
    case "sometimes":
      friendsCount[1]++;
      break;
    default:
      break;
  }

  return friendsCount;
};

export const publicResult = (data, reset) => {
  reset && (publicCount = [0, 0]);

  switch (data) {
    case "avoided":
      publicCount[0]++;
      break;
    case "sometimes":
      publicCount[1]++;
      break;
    default:
      break;
  }

  return publicCount;
};

export const workPlanResult = (data, reset) => {
  reset && (workPlanCount = [0, 0, 0]);

  switch (data) {
    case "wft":
      workPlanCount[0]++;
      break;
    case "visiting":
      workPlanCount[1]++;
      break;
    case "both":
      workPlanCount[2]++;
      break;
    default:
      break;
  }

  return workPlanCount;
};

export const vaccinationsResult = (data, reset) => {
  reset && (vaccinationsCount = [0, 0, 0]);

  switch (data) {
    case "single":
      vaccinationsCount[0]++;
      break;
    case "fully":
      vaccinationsCount[1]++;
      break;
    case "not":
      vaccinationsCount[2]++;
      break;
    default:
      break;
  }

  return vaccinationsCount;
};

export const ageGroupResult = (data, reset) => {
  reset && (ageGroupsCount = [0, 0, 0, 0, 0, 0]);

  switch (data) {
    case "0-17":
      ageGroupsCount[0]++;
      break;
    case "19-29":
      ageGroupsCount[1]++;
      break;
    case "30-39":
      ageGroupsCount[2]++;
      break;
    case "40-49":
      ageGroupsCount[3]++;
      break;
    case "50-59":
      ageGroupsCount[4]++;
      break;
    case "60+":
      ageGroupsCount[5]++;
      break;
    default:
      break;
  }

  return ageGroupsCount;
};
