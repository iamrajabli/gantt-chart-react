import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnDirective } from '@syncfusion/ej2-react-gantt'
import { projectData } from './data';

function App() {
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks"
  };


  return (
    <div className="App">
      <GanttComponent
        dataSource={projectData}
        taskFields={taskValues}
      // timelineSettings={{timelineViewMode: "Minutes"}}
      >
      
      </GanttComponent>
    </div>
  );
}

export default App;
