import { IsNotEmpty, IsJSON, IsString ,IsObject} from "class-validator";

export class CreateHiringDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsObject()
    sections: Record<string, any>;
}