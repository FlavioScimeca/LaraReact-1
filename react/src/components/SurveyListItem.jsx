import {
  ArrowTopRightOnSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import CustomButton from "./core/CustomButton";
import { PencilIcon } from "@heroicons/react/24/outline";

export const SurveyListItem = ({ survey, OnDeleteClick }) => {
  return (
    <div>
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover"
      />
      <h4 className=" mt-4 text-lg font-bold">{survey.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: survey.description }}
        className=" overflow-hidden flex-1"
      ></div>

      <div className="flex justify-between items-center mt-3">
        <CustomButton to={`surveys/${survey.id}`}>
          <PencilIcon className="w-5 h-5 mr-2">Edit</PencilIcon>
        </CustomButton>
        <div className="flex items-center">
          <CustomButton href={`/view/survey/${survey.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </CustomButton>

          {survey.id && (
            <CustomButton onClick={OnDeleteClick} circle link color="red">
              <TrashIcon className="w-5 h-5" />
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};
