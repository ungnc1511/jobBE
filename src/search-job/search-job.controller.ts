import { Controller, Get, Param, Query } from '@nestjs/common'
import { SearchJobService } from './search-job.service'

@Controller('search-job')
export class SearchJobController {
    constructor(private readonly searchJobService: SearchJobService) {}

    @Get()
    async search(@Query() query) {
        try {
            return await this.searchJobService.search(query)
        } catch (error) {
            console.log(error)
            return {
                EC: 1,
                EM: 'error from server',
            }
        }
    }
}
