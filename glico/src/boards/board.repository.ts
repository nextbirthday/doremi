/* eslint-disable prettier/prettier */
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';

export class BoardRepository extends Repository<Board> {
  constructor(
    @InjectRepository(Board)
    private dataSource: DataSource,
  ) {
    super(Board, dataSource.manager);
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    console.log('repo createBoardDto', createBoardDto);
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
