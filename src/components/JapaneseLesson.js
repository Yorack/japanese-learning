import { lessons } from "./JapaneseLessons";
import ArticleItem from "../entity/ArticleItem";
import LessonDisclosure from "./disclosure/LessonDisclosure";

const JapaneseLesson = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-3/4 box-content m-4 ">
        {lessons.map((lesson, index) => {
          const lessonContent = lesson.articles.map((article) => {
            const columns = article.columns || [
              "Symbol",
              "pronunciation",
              "meaning",
            ];

            return (
              <div className={`${index > 0 ? "mt-8" : ""} p-4 `}>
                <h3>{article.title}</h3>

                {article.description && (
                  <div className="my-4 border-l-4 border-blue-600 p-4 w-1/2 bg-blue-50">
                    {article.description}
                  </div>
                )}
                <table className="w-full table-lesson">
                  <thead>
                    <tr>
                      {columns.map((col) => (
                        <th>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {article.items.map((item: ArticleItem) => {
                      return (
                        <tr>
                          <td className="text-2xl">{item.kanji}</td>
                          <td className="text-2xl">{item.pronunciation}</td>
                          <td className="text-2xl">{item.meaning}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          });

          return (
            <div className="box-content rounded-md bg-white shadow-lg text-left mb-4">
              <LessonDisclosure lesson={lesson} content={lessonContent} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JapaneseLesson;
