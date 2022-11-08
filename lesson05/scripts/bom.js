const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    if (input.value != '') {
        let li = document.createElement('li');
        li.textContent = input.value;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';

        li.append(deleteButton);
        output.append(li);

        deleteButton.addEventListener('click', function() {
            output.removeChild(li);
            input.focus;
        });
        input.value = '';
        input.focus; 
        console.log()   
        }
    })