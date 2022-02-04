const calendarTable = document.getElementById("calendarTable");
const yearMonth = document.getElementById("yearMonth");

let today = new Date();
let date = new Date();

// 캘린더 생성
function calendarPaint(){
    //년도, 월 출력 
    yearMonth.innerText = `${today.getFullYear()}.${today.getMonth()+1}`;
    //첫째 날
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    //마지막 날
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // 남은 테이블 줄 삭제
    while (calendarTable.rows.length > 2) 
    {
        calendarTable.deleteRow(calendarTable.rows.length - 1);
    }
    let row = null;
    row = calendarTable.insertRow();

    // 1일 시작칸 찾기
    let cnt = 0;
    for (i = 0; i < firstDay.getDay(); i++) 
    {
        cell = row.insertCell();
        cnt = cnt + 1;
    }

    // 달력 출력
    for (i = 1; i <= lastDay.getDate(); i++)
    { 
        cell = row.insertCell();
        cell.innerText = i;
        cnt = cnt + 1;
        //일요일 계산
        if (cnt % 7 == 1) {
            cell.classList.add("sunday");
        }
        // 토요일 계산
        if (cnt % 7 == 0) { 
            cell.classList.add("saturday");
            row = calendarTable.insertRow();// 줄 추가
        }
        //today 계산
        if(today.getFullYear() == date.getFullYear() &&
        today.getMonth() == date.getMonth() && i==date.getDate()) 
        {
            cell.classList.add("today");
        }
    }
}
//지난 달
function lastMonth(){
    today = new Date(today.getFullYear(), today.getMonth() -1,  
        today.getMonth() - 1, today.getDate());
        calendarPaint();
}
//다음 달
function nextMonth(){
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    calendarPaint();
}

calendarPaint();