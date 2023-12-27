/* eslint-disable prettier/prettier */
import { CreateBoardDto } from './dto/create-board.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  //  boardsService: BoardsService; constructor(boardsService: BoardsService) { this.boardsService = boardsService; }
  /* 아래 코드는 TS의 도움을 받아서 가능하다. 자바스크립트에서는 private와 같은 접근 제한자(Access modifier)를 사용할 수 없지만 TS에서는 사용가능하다. */
  /* 접근 제한자를 생성자 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 */
  constructor(private boardsService: BoardsService) { }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    console.log('createBoardDto', createBoardDto);
    return this.boardsService.createBoard(createBoardDto);
  }
}
