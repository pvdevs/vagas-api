import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { CompanySizeEnum } from '../enum/company-size.enum';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Tipo de empresa',
    example: 'Ex: Empresa de Tecnologia',
  })
  companyType?: string;

  @IsOptional()
  @IsString()
  @IsEnum(CompanySizeEnum)
  @ApiProperty({
    description: 'Porte da empresa',
    example: CompanySizeEnum.BIG_SIZE,
  })
  companySize?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Localização da empresa',
    example: 'Ex: SP',
  })
  uf: string;

  @ApiProperty({
    required: false,
    description: 'Localização da empresa',
    example: {
      instagran: 'https://www.instagram.com/suaempresa',
      linkedin: 'https://www.linkedin.com/suaempresa',
      twitter: 'https://www.twitter.com/suaempresa',
    },
  })
  @IsOptional()
  @IsObject()
  otherSite: {
    instagran: string;
    linkedin: string;
    twitter: string;
  };

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Site da empresa',
    example: 'Ex: www.soujunior.com.br',
  })
  companySite?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  @ApiProperty({
    description: 'Descrição da empresa',
    example: 'Breve Descrição da Empresa',
  })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Imagem do perfil',
  })
  profile?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Chave para remoção da imagem do perfil',
  })
  profileKey?: string;

  @IsOptional()
  file: any;
}
