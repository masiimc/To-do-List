let _li = 0;
let _ul = document.querySelector('ul');
let inp = document.querySelectorAll('input');


function _compose() {
    document.querySelector('#row').classList.add('top');
    document.querySelector('#add').innerHTML = 'add';
    document.querySelector('#add').removeEventListener('click', _save);
    document.querySelector('#add').addEventListener('click', _add);
}

document.querySelector('#compuse').addEventListener('click', _compose)


//*********************** add

function _add() {
    let _item = inp[0].value;
    let _time = inp[1].value;
    let _date = inp[2].value;
    let flag = 0;
    if (
        !_item ||
        Number(_item) == 0 ||
        _item[0] == ' '
    ) {
        // add text with red color
        flag++;
    } else {
        // remove text
    }

    if (
        !_time ||
        !_date
    ) {
        // add text with red color
        flag++;
    } else {
        // remove text
    }

    if (flag == 0) {
        _li++;
        _ul.innerHTML += `
        <li id='item-${_li}'>
        <h2 class='item'>${_item}</h2>
        <div class="abs">
           <span><i class="bi bi-alarm"></i></span> <input type="time" class="time" readonly value="${_time}">
            <span><i class="bi bi-calendar"></i></span> <input type="date" class="date" readonly value="${_date}">
        </div>
        <div class="abs-2">
            <div class="status" onclick='_status()'><i class="bi bi-bell"></i></div>
            <button onclick="_edit()"><i class="bi bi-pencil-square"></i></button>
            <span onclick='_removeitem()'><i class="bi bi-x-square"></i></span>
        </div>
        </li> `;
        _removeAdd();
    }

}

// remove add
function _removeAdd() {
    document.querySelector('#row').classList.remove('top');
    for (i = 0; i < 3; i++) {
        inp[i].value = '';
    }
}


// remove item
function _removeitem() {
    ((((event.target).parentElement).parentElement).parentElement).remove();
}

let _id;

function _edit() {
    document.querySelector('#row').classList.add('top');
    _id = ((((event.target).parentElement).parentElement).parentElement).getAttribute('id');
    inp[0].value = document.querySelector(`#${_id} .item`).innerHTML;
    inp[1].value = document.querySelector(`#${_id} .time`).value;
    inp[2].value = document.querySelector(`#${_id} .date`).value;
    document.querySelector('#add').innerHTML = 'save';
    document.querySelector('#add').addEventListener('click', _save);
    document.querySelector('#add').removeEventListener('click', _add);
}

function _save() {
    document.querySelector(`#${_id} .item`).innerHTML = inp[0].value;
    document.querySelector(`#${_id} .time`).value = inp[1].value;
    document.querySelector(`#${_id} .date`).value = inp[2].value;
    _removeAdd()
}

// status
function _status() {
    let st = (event.target.classList);
    if (st.contains('bi-bell')) {
        st.remove('bi-bell');
        st.add('bi-check2');
    } else if (st.contains('bi-check2')) {
        st.add('bi-bell');
        st.remove('bi-check2');

    }
}