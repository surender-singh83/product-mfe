self.onmessage = function(e) {
    const {count}= e.data;
    const dummydata = Array.from(
        {length: count},
        (_, i) => `${i}`
    );

     const newData = [];
    dummydata.forEach((item)=> {
      newData.push('Array ' + (item * 5) + ' ' + item)
    })

self.postMessage(newData);
}