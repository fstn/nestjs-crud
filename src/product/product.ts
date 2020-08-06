import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsNumber, IsString, Min, MinLength } from 'class-validator';

@Entity()
export class Product {
  private _id: number;

  @PrimaryGeneratedColumn()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(2, { always: true })
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _sku: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  private _price: number;

  @Column()
  @IsNumber()
  @Min(0, { always: true })
  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
