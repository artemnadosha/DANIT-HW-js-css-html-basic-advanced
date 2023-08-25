export const createElementFilm = (object) => `
	<div class="wrapper-card">
	<div class="episode">EPISODE ${object.episodeId}</div>
		<h2 class="name">${object.name}</h2>
		<div class="description">${object.openingCrawl}</div>
		<div class="wrapper-btn">
		    <button class="btn" data-id="${object.episodeId}">Список персонажей</button>
        </div>
	</div>`;
