<?php
namespace app\common;

class PageHelper{
    private $list;
    private $pageNum;
    private $size;
    private $total;
    private $pages;
    private $prePage;
    private $nextPage;
    private $startRow;
    private $isFirstPage;
    private $isLastPage;
    private $hasPreviousPage;
    private $hasNextPage;

    public function __construct($list,$pageNum,$size){
        $this -> list = $list;
        $this -> pageNum = intval($pageNum)>0?intval($pageNum):1;;
        $this -> size = intval($size)>0?intval($size):1;
        $this -> total = count($list);
        $this -> pages = ceil($this -> total/$size);
        $this -> prePage = $pageNum>0? $pageNum-1:0;
        $this -> nextPage = $pageNum==$this->pages? $this->pages:$pageNum+1;
        $this -> startRow = $this -> getStartRow();
        $this -> endRow = $this -> getEndRow();
        $this -> isFirstPage = $pageNum==1;
        $this -> isLastPage = $pageNum==$this->pages;
        $this -> hasPreviousPage = $pageNum>1;
        $this -> hasNextPage = $pageNum<$this->pages;
	}


    public function pageInfo(){
        $list = $this->getList();
        return array("list"=>$list,"pageNum"=>$this->pageNum,"size"=>$this->size,"total"=>$this->total,"pages"=>$this->pages,"prePage"=>$this->prePage,"nextPage"=>$this->nextPage,"isFirstPage"=>$this->isFirstPage,"isLastPage"=>$this->isLastPage,"hasPreviousPage"=>$this->hasPreviousPage,"hasNextPage"=>$this->hasNextPage,"startRow"=>$this->startRow,"endRow"=>$this->endRow);
    }
    public function getStartRow(){
        $startRow = $this->pageNum>1?($this->pageNum-1)*$this->size+1:1;
        if($this->total == 0){
            $startRow = 0;
        }
        return $startRow;
    }
    public function getEndRow(){
        $endRow = $this->pageNum==$this->pages?$this->total:$this->pageNum*$this->size;
        if($this->total == 0){
            $endRow = 0;
        }
        return $endRow;
    }
    public function getList(){
        if($this->total>0){
            for($i=($this->startRow-1);$i<$this->endRow;$i++){
                $list = $this -> list;
                $arr[] = $list[$i];
            }
        }else{
            $arr = array();
        }
        return $arr;
    }
}
?>