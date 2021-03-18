import{Todo} from './modules/todo'
import{initDisplay,reloadProjects,todoPanel,refreshDisplay}from './modules/display'
import { getTodayTodos, storage } from './modules/storage';
initDisplay();
refreshDisplay(storage.get('inbox'));
reloadProjects();