new Vue({
    el : '#app',
    data : {
        id: 3, // 메모의 개인값을 알기위함.
        memo :'',
        memolist : [ 
            {id : 0, 
            memo:"제목입니다"},
            {id : 1, 
            memo:"메모의 제목을 작성하고"},
            {id : 2, 
            memo:"미리작성된메모입니다"}
        ]
    },
    methods : {
        addMemo : function(){
            this.memolist.push( 
                {id: this.id , 
                memo: this.memo} 
                );
            this.id++;
            this.memo="";
        },
        deleteMemo : function(id) {
            //memolist의 아이디를 지움
            
            let index=0;
            //foreach구문 : 배열의 요소값을 하나씩 함수에 넣어서 실행
            this.memolist.forEach( (element, i) => {
                //요소의 id와 가져온 id가 동일하다면 index값 할당
                if(element.id ==id) {
                    index = i;
                }
            });
            //가져온 인덱스 값을 이용해서 삭제
            this.memolist.splice(index,1);
        }
    }

})
