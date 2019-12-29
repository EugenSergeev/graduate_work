import { Api } from './api';
import { CommitList } from './commitlist'
import { CommitCard } from './commitcard'



const gitHubApi = new Api().gitHubCommits().then(resJson => {
  const commits = new CommitList(document.querySelector('.swiper-wrapper'))
  for (let i = 1; i < resJson.length; i++) {
    console.log(i)
    const commit_card = new CommitCard(resJson[i]);
    commits.addCommit(commit_card.createCard())
  };
})
.finally(resJson =>{
  const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

