const moment = require("moment");
let allMeetings = []



let meeting1 = moment([2019]);
let meeting2 = moment([2021]);
allMeetings.push(meeting1);
allMeetings.push(meeting2);


var meetingsTable = document.getElementById("meetingsTable")
console.log(meetingsTable);
let innerContent = ""
let rowCount = 1
for (const meeting of allMeetings) {
    innerContent += `
    <tr>
        <th scope="row">${rowCount}</th>
        <th><button class="mb-2 mr-2 btn btn-success">Start</button><button class="mb-2 mr-2 btn btn-danger">Cancel</button></th>
        <td>${meeting.format('M')}/${meeting.format('D')}/${meeting.format('Y')}</td>
        <td>${meeting.format('hh:mm A')}</td>
    </tr>
    `
    rowCount += 1;
    console.log(meeting.format('Y'));

}
// console.log(innerContent)
meetingsTable.innerHTML += innerContent;



/*
<tr>
    <th scope="row">1</th>
    <th><button class="mb-2 mr-2 btn btn-success">Start</button><button class="mb-2 mr-2 btn btn-danger">Cancel</button></th>
    <td>4/2/2020</td>
    <td>4:00 PM</td>
    <td>Bill Gates</td>
    <td>64</td>
    <td>Male</td>
</tr>
*/