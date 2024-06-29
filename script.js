var styles=document.documentElement.style;
var rankList=[
    {'rank' :1, 'name' : 'Kundan', 'year' :1990, 'marks' :450,'percentage' :93},
    {'rank' :2, 'name' : 'Rakesh', 'year' :1992, 'marks' :350,'percentage' :80},
    {'rank' :3, 'name' : 'Raju', 'year' :1993, 'marks' :150,'percentage' :60},
    {'rank' :4, 'name' : 'Reshma', 'year' :1994, 'marks' :400,'percentage' :79},
    {'rank' :5, 'name' : 'Hema', 'year' :1995, 'marks' :432,'percentage' :83},
    {'rank' :6, 'name' : 'Urman', 'year' :1996, 'marks' :421,'percentage' :81},
    {'rank' :7, 'name' : 'Rohan', 'year' :1997, 'marks' :324,'percentage' :75},
    {'rank' :8, 'name' : 'Mohan', 'year' :1998, 'marks' :399,'percentage' :76},
    {'rank' :9, 'name' : 'Mahesh', 'year' :1999, 'marks' :313,'percentage' :78},
    {'rank' :10, 'name' : 'Arman', 'year' :2000, 'marks' :498,'percentage' :98},
    {'rank' :11, 'name' : 'Arvind', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :12, 'name' : 'Kushum', 'year' :1999, 'marks' :389,'percentage' :86},
    {'rank' :13, 'name' : 'Vishal', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :14, 'name' : 'Mohit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :15, 'name' : 'Bijay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :16, 'name' : 'Sunny', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :17, 'name' : 'Pankaj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :18, 'name' : 'Kittu', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :19, 'name' : 'Sunita', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :20, 'name' : 'Rajesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :21, 'name' : 'Sonali', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :22, 'name' : 'Muskan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :23, 'name' : 'Arvind', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Nandu', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Khushi', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Pooja', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Abhishek', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Chandan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sachin', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Niraj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Amit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Manoj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Anil', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Santosh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Mukesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Vivek', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Suman', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sonali', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sohit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Rohit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Naresh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Ajay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sanjay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Suraj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Kundan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :2, 'name' : 'Rakesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :3, 'name' : 'Raju', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :4, 'name' : 'Reshma', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :5, 'name' : 'Hema', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :6, 'name' : 'Urman', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :7, 'name' : 'Rohan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :8, 'name' : 'Mohan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :9, 'name' : 'Mahesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :10, 'name' : 'Sangita', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :11, 'name' : 'Arvind', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :12, 'name' : 'Sushma', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :13, 'name' : 'Vishal', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :14, 'name' : 'Mohit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :15, 'name' : 'Bijay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :16, 'name' : 'Priya', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :17, 'name' : 'Pankaj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :18, 'name' : 'Sarita', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :19, 'name' : 'Sunita', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :20, 'name' : 'Rajesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :21, 'name' : 'Sonali', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :22, 'name' : 'Shambhu', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :23, 'name' : 'Arvind', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Saurabh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Khushi', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Rishabh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Shital', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Chandan', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sachin', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Suraj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Amit', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Arohi', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Anil', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Santosh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Mukesh', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Sujay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Suman', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Pritam', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Manohar', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Manoj', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Mohini', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Ajay', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Monika', 'year' :1999, 'marks' :500,'percentage' :99},
    {'rank' :1, 'name' : 'Satyam', 'year' :1999, 'marks' :500,'percentage' :99}
];


var array=[];
var arr_length=0;
var table_size=10;
var start_index=1;
var end_index=0;
var current_index=1;
var max_index=0;
var sortCol='rank';
var ascOrder=true;

function perLoadCalculation(){
    filterRankList();
    sortRankList();
    arr_length=array.length;
    max_index=arr_length/table_size;

    if((arr_length%table_size)>0){
        max_index++;
    }
}
function filterRankList(){
    var tab_filter_text=$("#tab_filter_text").val();
    if(tab_filter_text!=''){
        var temp_array=rankList.filter(function(object){
              return object.rank.toString().includes(tab_filter_text)
                    || object.name.toUpperCase().includes(tab_filter_text.toUpperCase())
                    || object.marks.toString().includes(tab_filter_text)
                    || object.year.toString().includes(tab_filter_text)
                    || object.percentage.toString().includes(tab_filter_text);
        });
        array=temp_array;
    }else{
        array=rankList;
    }
    
}

function sortRankList(){
    array.sort((a,b)=>{
        if(ascOrder){
            return (a[sortCol]>b[sortCol])?1:-1;
        }else{
            return (b[sortCol]>a[sortCol])?1:-1;
        }
         
    });
    $(".table th").removeClass('sort_indication');
    $(".table th[colName='"+sortCol+"']").addClass('sort_indication');

    if(ascOrder){
        styles.setProperty('--up_arrow_color','#ffffff');
        styles.setProperty('--up_arrow_shadow','0px 0px 10px #fff');
        styles.setProperty('--down_arrow_color','#ffffff49');
        styles.setProperty('--down_arrow_shadow','0px 0px 0px #ffffff00');
    }else{
        styles.setProperty('--up_arrow_color','#ffffff49');
        styles.setProperty('--up_arrow_shadow','0px 0px 0px #ffffff00');
        styles.setProperty('--down_arrow_color','#ffffff');
        styles.setProperty('--down_arrow_shadow','0px 0px 10px #fff');
    }
}
function displayIndexButtons(){
    perLoadCalculation();

    $(".index_buttons button").remove();
    $(".index_buttons").append('<button onclick="previous();">Previous</button>');

    for(var i=1;i<max_index;i++){
        $(".index_buttons").append('<button onclick="indexPagination('+i+');" index="'+i+'">'+i+'</button>');
    }

    $(".index_buttons").append('<button onclick="next();">Next</button>');
    heilightIndexButton();
}


function heilightIndexButton(){
    start_index=((current_index -1)*table_size)+1;
    end_index=(start_index+table_size)-1;
    if(end_index>arr_length){
        end_index=arr_length;
    }

    $(".footer span").text('Show '+start_index+' to '+end_index+' of '+arr_length+' enteries')
    $(".index_buttons button").removeClass('active');
    $(".index_buttons button[index='"+current_index+"']").addClass('active');

    displayTableRows();
}

function displayTableRows(){
    $(".table table tbody tr").remove();
    var tab_start=start_index-1;
    var tab_end=end_index;

    for(var i=tab_start;i<tab_end;i++){
        var student=array[i];
        var tr='<tr>'+
               '<td>'+student['rank']+'</td>'+
               '<td>'+student['name']+'</td>'+
               '<td>'+student['year']+'</td>'+
               '<td>'+student['marks']+'</td>'+
               '<td>'+student['percentage']+'%</td>'+
            '</tr>';

            $(".table table tbody").append(tr);
    }
}

displayIndexButtons();

function next(){
    if(current_index<max_index){
        current_index++;
        heilightIndexButton();
    }
}

function previous(){
    if(current_index>1){
        current_index--;
        heilightIndexButton();
    }
}

function indexPagination(index){
   current_index=parseInt(index);
   heilightIndexButton();
}

$('#table_size').change(function(){
    table_size=parseInt($(this).val());
    current_index=1;
    start_index=1;
    displayIndexButtons();
});

$("#tab_filter_button").click(function(){
    current_index=1;
    start_index=1;
    displayIndexButtons();
})

$(".table th").click(function(){
    var colName=$(this).attr('colName');
    ascOrder=(sortCol==colName)?!ascOrder:true;
    sortCol=colName;
    current_index=1;
    start_index=1;
    displayIndexButtons();
});
