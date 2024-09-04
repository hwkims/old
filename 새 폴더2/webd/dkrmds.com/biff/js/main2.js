//자주 수정할 수 있는 정보값들을 상단에 전역 변수로 설정
const frame ="section";
const box="article";
const speed="0.5s";
const activeClass ="on";
const btn=document.querySelectorAll("main ul li");
let grid; //플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

window.addEventListener('load',()=>{
    init(); //화면 초기화 함수 호출
    filter(btn); //정렬 버튼 기능의 함수 호출
 
});
//화면 초기화 함수 정의
function init(){
    grid = new Isotope(frame ,{//배치할 요소를 감싸고 있는 부모 요소명
        itemSelector : box, //배치할 요소명
        columWidth: box, //너비값을 구할 요소명
        transitionDuration: speed, //화면 재배치 시 요소가 움직이는 속도
    }); 
}

//정렬 버튼 기능의 함수 정의
function filter(arr){ //매개변수 arr을 통해 반복하는 버튼 그룹을 인수로 전달
    for(let el of arr){
        el.addEventListener('click',(e)=>{
            e.preventDefault();

            //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
            const sort = e.currentTarget.querySelector('a').getAttribute('href');
            
            //grid에 저장된 결과값을 불러와 재정렬 기능 연결
            grid.arrange({   //arrange는 isotope에 있는 메소드
                //옵션값으로 sort 변수값 지정
                filter:sort
            });

            //다시 모든 버튼의 개수만큼 반복해서 
            for(let el of arr){
                el.classList.remove('on');

                //클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
                e.currentTarget.classList.add('on');
            }
        });
    }

}