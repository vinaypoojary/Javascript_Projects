const arr = [
    {"roll_no":"1","subject":"english","marks":70},
    {"roll_no":"1","subject":"maths","marks":85},
    {"roll_no":"1","subject":"science","marks":65},
    {"roll_no":"2","subject":"english","marks":62},
    {"roll_no":"2","subject":"maths","marks":93},
    {"roll_no":"2","subject":"science","marks":55},
    {"roll_no":"3","subject":"english","marks":73},
    {"roll_no":"3","subject":"maths","marks":95},
    {"roll_no":"3","subject":"science","marks":85},
    {"roll_no":"4","subject":"english","marks":55},
    {"roll_no":"4","subject":"maths","marks":78},
    {"roll_no":"4","subject":"science","marks":82},
    {"roll_no":"5","subject":"english","marks":71},
    {"roll_no":"5","subject":"maths","marks":61},
    {"roll_no":"5","subject":"science","marks":51}
 ];
 const groupArray = (arr = []) => {
    // create map
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
       const s = JSON.stringify(arr[i].roll_no);
       if (!map.has(s)) {
          map.set(s, {
             roll_no: arr[i].roll_no,
             total_mark: arr[i].marks,
             count: 1,
          });
       } else {
          map.get(s).count++;
          map.get(s).total_mark += arr[i].marks;
       }
    }
    const res = Array.from(map.values())
    return res;
 };
 console.log(groupArray(arr));