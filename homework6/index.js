/*Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript
Это такой процесс при котором функция или что либо откалывается на какой то срок
после чего выполняется когда приходит его время. Если это таймаут, функция откаладывается на то время которое будет указанно,
если это какой то проммис, он откаладывается пока не получит данные, после получения данных выполнится.
*/

const button = document.querySelector("#btn");
const userInfoContainer = document.querySelector(".user-info");

const fetchIp = async (url) => {
  const getIp = await fetch(url);
  const resIp = await getIp.json();

  const getDataUser = await fetch(
    `http://ip-api.com/json/${resIp.ip}?fields=status,continent,country,regionName,city,district`
  );
  return getDataUser.json();
};

const createElementUserInfo = (obj) => `
    <li>${obj.continent}</li>
    <li>${obj.country}</li>
    <li>${obj.regionName}</li>
    <li>${obj.city}</li>
	<li>${obj.district}</li>`;

button.addEventListener("click", async () => {
  const getDataUser = await fetchIp("https://api.ipify.org/?format=json");

  userInfoContainer.innerHTML = createElementUserInfo(getDataUser);
});
