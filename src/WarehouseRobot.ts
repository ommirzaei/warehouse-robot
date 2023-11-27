export class WarehouseRobot {
    private x: number;
    private y: number;
    private readonly gridSize: number;

    constructor(gridSize: number = 10) {
        this.x = 0; // Starting at the southwest corner
        this.y = 0;
        this.gridSize = gridSize;
    }

    private moveNorth() {
        if (this.y < this.gridSize - 1) {
            this.y++;
        }
    }

    private moveSouth() {
        if (this.y > 0) {
            this.y--;
        }
    }

    private moveEast() {
        if (this.x < this.gridSize - 1) {
            this.x++;
        }
    }

    private moveWest() {
        if (this.x > 0) {
            this.x--;
        }
    }

    private isValidCommand(command: string): boolean {
        return ['N', 'E', 'S', 'W'].includes(command);
    }

    public executeCommands(commands: string) {
        const commandList = commands.split(' ');

        for (const command of commandList) {
            if (this.isValidCommand(command)) {
                switch (command) {
                    case 'N':
                        this.moveNorth();
                        break;
                    case 'S':
                        this.moveSouth();
                        break;
                    case 'E':
                        this.moveEast();
                        break;
                    case 'W':
                        this.moveWest();
                        break;
                }
            } else {
                //If a command is invalid, a warning is being logged to the console. Alternatively, you can throw an error if you want to handle it more strictly.
                console.warn(`Invalid command: ${command}`);
            }
        }
    }

    public getPosition() {
        return { x: this.x, y: this.y };
    }
}
