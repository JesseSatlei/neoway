import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    constructor(cpf: string, privado: number, incomplete: number, dateLastOrder: string, averageTicket: number, ticketLastOrder: number, storeCurrent: string, storeLastOrder: string) {
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

    @Column({ nullable: true })
    cpf: string;

    @Column()
    privado: number;

    @Column()
    incomplete: number;

    @Column({ nullable: true })
    dateLastOrder: string;

    @Column({ type: 'decimal', nullable: true })
    averageTicket: number;

    @Column({ type: 'decimal', nullable: true })
    ticketLastOrder: number;

    @Column({ nullable: true })
    storeCurrent: string;

    @Column({ nullable: true })
    storeLastOrder: string;

}
