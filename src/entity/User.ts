import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    constructor(cpf: string, privado: number, incomplete: number, dateLastOrder: Date, averageTicket: number, ticketLastOrder: number, storeCurrent: string, storeLastOrder: string) {
        this.cpf = cpf;
        this.privado = privado;
        this.incomplete = incomplete;
        this.dateLastOrder = dateLastOrder;
        this.averageTicket = averageTicket;
        this.ticketLastOrder = ticketLastOrder;
        this.storeCurrent = storeCurrent;
        this.storeLastOrder = storeLastOrder;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    privado: number;

    @Column()
    incomplete: number;

    @Column()
    dateLastOrder: Date;

    @Column()
    averageTicket: number;

    @Column()
    ticketLastOrder: number;

    @Column()
    storeCurrent: string;

    @Column()
    storeLastOrder: string;

}
