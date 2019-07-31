// Data Access Object — это класс, содержащий CRUD методы для конкретной сущности. Интрефейс AccountDAO может иметь множество реализаций, которые могут использовать различные ORM фреймворки или прямые SQL-запросы к базе данных

let dbConfig = require("../Utilities/mysqlConfig");



let getArticle = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from articles where 1`, criteria, callback);
}


let getArticleDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from articles where 1 ${conditions}`, callback);
}

let createArticle = (dataToSet, callback) => {
    console.log("insert into article set ? ", dataToSet, 'pankaj')
    dbConfig.getDB().query("INSERT INTO articles SET ? ", dataToSet, callback);
}

let deleteArticle = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from articles where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from articles where 1 ${conditions}`, callback);

}

let updateArticle = (criteria, dataToSet, callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
    dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
    console.log(`UPDATE articles SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE articles SET ${setData} where 1 ${conditions}`, callback);
}
module.exports = {
    getArticle: getArticle,
    createArticle: createArticle,
    deleteArticle: deleteArticle,
    updateArticle: updateArticle,
    getArticleDetail: getArticleDetail
}
