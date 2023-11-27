import { WarehouseRobot } from './WarehouseRobot';

const robot = new WarehouseRobot();
robot.executeCommands('N E N E N E N E');
console.log(`Robot Position: ${JSON.stringify(robot.getPosition())}`);
