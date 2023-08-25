/** Як можна оголосити змінну у Javascript?
Переменную можно огласить разными способами такими как : 
    1.var - однако считается старым способом, поскольку используется в глобальной области видимости.
    2.const - рекомендуется использоваться где только возможно и переменную const нельзя переназначить.
    3.let - огласив переменную через let, в дальнейшем её можно переназначить, работает так же как и var,однако работает в своей области видимости,
    что предотвращает изменения из глобальной в локальную область.
*/

/** У чому різниця між функцією prompt та функцією confirm?
    promnt - в даном вызове функции получаем ответ пользователя в качетсве строки или пустового обьекта.
    confirm - в этом случае, получаем от пользователя ответ логическое да или нет, на тот или иной вопрос.
 */

/** Що таке неявне перетворення типів? Наведіть один приклад.
    Это такой вид приобразавания который считается принудительным, когда происходит компиляция тип автоматически приводятся к одному.
    Например когда добавляем строку с числом при компиляции все приводится к строке. 
    5 + '5' = '55'
    5 + 5 = 10
    'Artem' + 5 = Artem5 
 */

let admin;
const name  = 'Artem';
admin = name;

console.log(admin);


const ONE_DAY_PER_SECOND = 24 * 60 * 60;
const days = Math.round(Math.random() * 10);

console.log(ONE_DAY_PER_SECOND * days)


let getUserInfo = +prompt('Введите что то!')

console.log(getUserInfo)