
export type DummyQuestionType = {
    id: number,
    title : string,
    answer : string,
    date : string,
    category? : string,
    category_path? : string,
}

export type DummyCategoryType =  {
    id :number ,
    name : string,
    type : string,
    questions : DummyQuestionType[], 
}

export type DummyDataType = {
    categories :DummyCategoryType[],
    questions : DummyQuestionType[],
    
}