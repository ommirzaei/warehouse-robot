import { WarehouseRobot } from '../src/WarehouseRobot';

describe('WarehouseRobot', () => {
    let robot: WarehouseRobot;
    let consoleWarnMock: jest.SpyInstance;

    beforeEach(() => {
        robot = new WarehouseRobot();
        consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleWarnMock.mockRestore();
    });

    test('moves north within boundaries', () => {
        robot.executeCommands('N N N N N N N N N N N N'); // Exceeding the boundary
        expect(robot.getPosition()).toEqual({ x: 0, y: 9 }); // Should stop at the boundary
    });

    test('moves south within boundaries', () => {
        robot.executeCommands('N N N N'); // Move up a bit first
        robot.executeCommands('S S S S S S S S S S S S'); // Exceeding the boundary
        expect(robot.getPosition()).toEqual({ x: 0, y: 0 }); // Should stop at the boundary
    });

    test('moves east within boundaries', () => {
        robot.executeCommands('E E E E E E E E E E E E'); // Exceeding the boundary
        expect(robot.getPosition()).toEqual({ x: 9, y: 0 }); // Should stop at the boundary
    });

    test('moves west within boundaries', () => {
        robot.executeCommands('E E E E'); // Move right a bit first
        robot.executeCommands('W W W W W W W W W W W W'); // Exceeding the boundary
        expect(robot.getPosition()).toEqual({ x: 0, y: 0 }); // Should stop at the boundary
    });

    test('ignores invalid commands', () => {
        robot.executeCommands('N X E Y S Z W A'); // X, Y, Z, A are invalid
        expect(robot.getPosition()).toEqual({ x: 0, y: 0 }); // Should only move N, E
    });

    test('returns to starting position after a full square movement', () => {
        robot.executeCommands('N E S W');
        expect(robot.getPosition()).toEqual({ x: 0, y: 0 }); // Back to start
    });

    test('complex movement pattern within boundaries', () => {
        robot.executeCommands('N N E E S W N E S S W N');
        expect(robot.getPosition()).toEqual({ x: 1, y: 1 });
    });
});
