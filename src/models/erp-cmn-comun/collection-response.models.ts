export class CollectionResponse <E>{
    Data?: E[];
    Page?: number;
    Count?: number;
    Next?: string;
    Previous?: string;
    MySelf?: string;
    First?: string;
    Last?: string;

}