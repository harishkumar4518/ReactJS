export const DashBoard = {
    DashBoardGetDate
}

function DashBoardGetDate(event) {
    let start_date, end_date, temp_date;
    let header_title = `Today's Due`;
    if (event) {
        if (event.target.value == 'This Week' || event.target.value == 'This Month') {
            end_date = new Date();
            temp_date = new Date();
            if (event.target.value == "This Week") {
                start_date = new Date(temp_date.setDate(temp_date.getDate() - 7));
                header_title = 'Week Wise';
            } else if (event.target.value == "This Month") {
                start_date = new Date(temp_date.setDate(temp_date.getDate() - 30));
                header_title = 'Month Wise';
            }
        } else {
            start_date = new Date();
            temp_date = new Date();
            end_date = new Date(temp_date.setDate(temp_date.getDate() + 1));
        }
    } else {
        start_date = new Date();
        temp_date = new Date();
        end_date = new Date(temp_date.setDate(temp_date.getDate() + 1));
    }
    return {
        start_date: start_date,
        end_date: end_date,
        header_title: header_title
    }
}