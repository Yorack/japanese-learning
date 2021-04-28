import { lessons } from "./JapaneseLessons";
import ArticleItem from "../entity/ArticleItem";
import LessonDisclosure from "./disclosure/LessonDisclosure";

const JapaneseLesson = () => {
  return (
    <div className="flex-1 box-content m-4">
      {lessons.map((lesson, index) => {
        const lessonContent = lesson.articles.map((article) => {
          return (
            <div className={`${index > 0 ? "mt-8" : ""} p-4 `}>
              <h3>{article.title}</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-2/6">Symbol</th>
                    <th className="w-2/6">pronunciation</th>
                    <th className="w-2/6">meaning</th>
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
  );
};

export default JapaneseLesson;
