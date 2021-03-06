class Api::QuestionsController < ApplicationController
    def index 
        @questions = Question.all
        render 'api/questions/index', include: :votes, include: :answers
    end

     def show
        @question = Question.find(params[:id])
        render '/api/questions/show', include: :answers
    end

    def create
        @question = Question.new(question_params)
        @question.asker_id = current_user.id
        
        if @question.save 
            render '/api/questions/show', include: :answers
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def update
        @question = Question.find(params[:id])

        if @question.update(question_params)
            render '/api/questions/show', include: :answers
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy

        render '/api/questions/show'
    end

    def total_votes
        @total_votes = this.votes.map {|v| v.score}.sum
        
        render :votes
    end

    private

    def question_params
        params.require(:question).permit(:title, :body, :views)
    end
end