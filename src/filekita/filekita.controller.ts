import { Controller, Get, Param } from '@nestjs/common';

@Controller('filekita')
export class FilekitaController {

    @Get()
    lihatOutput(): string{
        return 'Halaman Index Controller File Kita'
    }

    @Get(':id')
    testGetById(@Param('id') id: string): string{
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return 'ID harus berupa angka';
        }
        return 'ini endpoint get By ID ' + numericId;
    }

    @Get('slug/:slug')
    testGetSlug(@Param('slug') slug: string): string {
        const stringSlug = String(slug);
        if(!isNaN(Number(stringSlug))) {
            return 'Slug Harus Text'
        }
        return 'Ini adalah endpoint get by Slug ' + stringSlug
    }
}
