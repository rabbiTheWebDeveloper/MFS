
import UMTabelItem from "./UMTabelItem";

const UMTabel = ({ tasksData,onDeleteClick ,onEdit , onFavorite}) => {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <tr>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
            {" "}
            Title{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
            {" "}
            Description{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
            {" "}
            Tags{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Priority{" "}
          </th>
          <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
            {" "}
            Options{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {tasksData.length > 0 &&(
          tasksData.map((task) => (
            <UMTabelItem key={task.id} task={task} onDeleteClick={onDeleteClick} onEdit={onEdit} onFavorite={onFavorite} />
          ))
        ) 
        }
      </tbody>
    </table>
  );
};

export default UMTabel;
