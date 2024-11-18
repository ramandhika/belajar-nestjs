import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class FileKita {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 500})
    nama: string

    @Column('text')
    deskripsi: string

    @Column()
    isPublish: boolean

    @Column('text')
    image: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}