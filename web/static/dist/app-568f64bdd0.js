"use strict";function confirmDangerousAction(t){var e=$(t);e.is("a")||(e=e.closest("a"));var n="Are you sure?";e.data("confirm-title")&&(n=e.data("confirm-title"));var a=!0;(e.hasClass("btn-success")||e.hasClass("btn-outline-success"))&&(a=!1);var o=e.clone().children().remove().end().text();return swal({title:n,buttons:[!0,o],dangerMode:a})}function styleForm(t,e){var n=$.extend({},{placeholder:"Select...",no_results:"No results found!",advanced:"Advanced"},e),a=$(t);$(window).on("beforeunload",function(){return!1}),a.on("submit",function(){$(window).off("beforeunload")}),a.find("input:not(input[type=button],input[type=submit],input[type=reset],input[type=radio],input[type=checkbox]),textarea,select").addClass("form-control"),a.find("select").wrap('<div class="select" />').chosen({width:"100%",placeholder_text_single:n.placeholder,placeholder_text_multiple:n.placeholder,no_results_text:n.no_results}),autosize(a.find("textarea")),a.find("input[type=radio]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-radio" />')}),a.find("input[type=checkbox]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-checkbox" />')}),a.find(".help-block").addClass("form-text"),a.find(".help-block.form-error").parent().addClass("has-error"),a.find(".help-block.form-success").parent().addClass("has-success"),a.find(".help-block.form-warning").parent().addClass("has-warning"),a.find("label.advanced,fieldset.advanced legend").prepend('<span class="text-info">'+n.advanced+"</span> "),a.find("input[type=button],input[type=submit],input[type=reset]").addClass("btn m-t-10");var o=a.find(".has-error:visible");0<o.length&&$([document.documentElement,document.body]).animate({scrollTop:o.first().offset().top-$("#header").outerHeight()-15},1e3)}function notify(t,e,n){var a={type:e,allow_dismiss:!0,label:"Cancel",className:"btn-xs btn-inverse align-right",placement:{from:"top",align:"right"},delay:1e4,z_index:8,animate:{enter:"animated fadeIn",exit:"animated fadeOut"},offset:{x:20,y:85}};n&&(a.placement.from="top",a.placement.align="center",a.offset.y=20),$.notify({message:t},a)}$(function(){$("a.btn-danger,a.btn[data-confirm-title]").on("click",function(t){t.preventDefault();var e=$(this).attr("href");return confirmDangerousAction(t.target).then(function(t){t&&(window.location.href=e)}),!1})}),$("form button.file-upload").on("click",function(t){var e=$(this).siblings("input[type=file]")[0];$(e).trigger("click")}),$("form input[type=file]").change(function(t){var e=$(this).siblings(".file-name")[0];$(e).text($(this).val().split("\\").pop())});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGFuZ2VyLmpzIiwiZm9ybS5qcyIsIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJjb25maXJtRGFuZ2Vyb3VzQWN0aW9uIiwiZWwiLCIkZWwiLCIkIiwiaXMiLCJjbG9zZXN0IiwiY29uZmlybVRpdGxlIiwiZGF0YSIsImRhbmdlck1vZGUiLCJoYXNDbGFzcyIsImJ1dHRvblRleHQiLCJjbG9uZSIsImNoaWxkcmVuIiwicmVtb3ZlIiwiZW5kIiwidGV4dCIsInN3YWwiLCJ0aXRsZSIsImJ1dHRvbnMiLCJzdHlsZUZvcm0iLCJmb3JtIiwidHJhbnNsYXRpb25zIiwibGFuZyIsImV4dGVuZCIsInBsYWNlaG9sZGVyIiwibm9fcmVzdWx0cyIsImFkdmFuY2VkIiwiJGZvcm0iLCJ3aW5kb3ciLCJvbiIsIm9mZiIsImZpbmQiLCJhZGRDbGFzcyIsIndyYXAiLCJjaG9zZW4iLCJ3aWR0aCIsInBsYWNlaG9sZGVyX3RleHRfc2luZ2xlIiwicGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZSIsIm5vX3Jlc3VsdHNfdGV4dCIsImF1dG9zaXplIiwiZWFjaCIsInRoaXMiLCJuZXh0IiwiYWRkQmFjayIsIndyYXBBbGwiLCJwYXJlbnQiLCJwcmVwZW5kIiwiZXJyb3JfZmllbGRzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImZpcnN0Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsIm1pbmltYWxfbGF5b3V0IiwiZ3Jvd2xTZXR0aW5ncyIsImFsbG93X2Rpc21pc3MiLCJsYWJlbCIsImNsYXNzTmFtZSIsInBsYWNlbWVudCIsImZyb20iLCJhbGlnbiIsImRlbGF5Iiwiel9pbmRleCIsImVudGVyIiwiZXhpdCIsIngiLCJ5IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlua1VybCIsImF0dHIiLCJ0YXJnZXQiLCJ0aGVuIiwidmFsdWUiLCJsb2NhdGlvbiIsImhyZWYiLCJpbnB1dEVsZW1lbnQiLCJzaWJsaW5ncyIsInRyaWdnZXIiLCJjaGFuZ2UiLCJmaWxlTmFtZUVsZW1lbnQiLCJ2YWwiLCJzcGxpdCIsInBvcCJdLCJtYXBwaW5ncyI6ImFBQUEsU0FBU0EsdUJBQXVCQyxHQUM1QixJQUFJQyxFQUFNQyxFQUFFRixHQUVQQyxFQUFJRSxHQUFHLE9BQ1JGLEVBQU1BLEVBQUlHLFFBQVEsTUFHdEIsSUFBSUMsRUFBZSxnQkFDZkosRUFBSUssS0FBSyxtQkFDVEQsRUFBZUosRUFBSUssS0FBSyxrQkFHNUIsSUFBSUMsR0FBYSxHQUNiTixFQUFJTyxTQUFTLGdCQUFrQlAsRUFBSU8sU0FBUywwQkFDNUNELEdBQWEsR0FLakIsSUFBSUUsRUFBYVIsRUFBSVMsUUFBUUMsV0FBV0MsU0FBU0MsTUFBTUMsT0FFdkQsT0FBT0MsS0FBSyxDQUNSQyxNQUFPWCxFQUNQWSxRQUFTLEVBQUMsRUFBTVIsR0FDaEJGLFdBQVlBLElDeEJwQixTQUFTVyxVQUFVQyxFQUFNQyxHQUVyQixJQUFJQyxFQUFPbkIsRUFBRW9CLE9BQU8sR0FBSSxDQUNwQkMsWUFBZSxZQUNmQyxXQUFjLG9CQUNkQyxTQUFZLFlBQ2JMLEdBRUNNLEVBQVF4QixFQUFFaUIsR0FFZGpCLEVBQUV5QixRQUFRQyxHQUFHLGVBQWdCLFdBQ3pCLE9BQU8sSUFHWEYsRUFBTUUsR0FBRyxTQUFVLFdBQ2YxQixFQUFFeUIsUUFBUUUsSUFBSSxrQkFHbEJILEVBQU1JLEtBQUssNkhBQTZIQyxTQUFTLGdCQUVqSkwsRUFBTUksS0FBSyxVQUFVRSxLQUFLLDBCQUEwQkMsT0FBTyxDQUN2REMsTUFBTyxPQUNQQyx3QkFBeUJkLEVBQUtFLFlBQzlCYSwwQkFBMkJmLEVBQUtFLFlBQ2hDYyxnQkFBaUJoQixFQUFLRyxhQUcxQmMsU0FBU1osRUFBTUksS0FBSyxhQUVwQkosRUFBTUksS0FBSyxxQkFBcUJTLEtBQUssV0FDakNyQyxFQUFFc0MsTUFBTVQsU0FBUyx3QkFDakI3QixFQUFFc0MsTUFBTXBDLFFBQVEsZUFDaEJGLEVBQUVzQyxNQUFNQyxLQUFLLFNBQVNWLFNBQVMsd0JBQXdCVyxVQUFVQyxRQUFRLGlEQUU3RWpCLEVBQU1JLEtBQUssd0JBQXdCUyxLQUFLLFdBQ3BDckMsRUFBRXNDLE1BQU1ULFNBQVMsd0JBQ2pCN0IsRUFBRXNDLE1BQU1wQyxRQUFRLGVBRWhCRixFQUFFc0MsTUFBTUMsS0FBSyxTQUNSVixTQUFTLHdCQUNUVyxVQUNBQyxRQUFRLG9EQUdqQmpCLEVBQU1JLEtBQUssZUFBZUMsU0FBUyxhQUNuQ0wsRUFBTUksS0FBSywwQkFBMEJjLFNBQVNiLFNBQVMsYUFDdkRMLEVBQU1JLEtBQUssNEJBQTRCYyxTQUFTYixTQUFTLGVBQ3pETCxFQUFNSSxLQUFLLDRCQUE0QmMsU0FBU2IsU0FBUyxlQUd6REwsRUFBTUksS0FBSywyQ0FDTmUsUUFBUSwyQkFBMkJ4QixFQUFLSSxTQUFTLFlBRXREQyxFQUFNSSxLQUFLLDJEQUEyREMsU0FBUyxjQUcvRSxJQUFJZSxFQUFlcEIsRUFBTUksS0FBSyxzQkFDSixFQUF0QmdCLEVBQWFDLFFBQ2I3QyxFQUFFLENBQUM4QyxTQUFTQyxnQkFBaUJELFNBQVNFLE9BQU9DLFFBQVEsQ0FDakRDLFVBQVdOLEVBQWFPLFFBQVFDLFNBQVNDLElBQU1yRCxFQUFFLFdBQVdzRCxjQUFnQixJQUM3RSxLQzVEWCxTQUFTQyxPQUFPQyxFQUFTQyxFQUFNQyxHQUUzQixJQUFJQyxFQUFnQixDQUNoQkYsS0FBTUEsRUFDTkcsZUFBZSxFQUNmQyxNQUFPLFNBQ1BDLFVBQVcsaUNBQ1hDLFVBQVcsQ0FDUEMsS0FBTSxNQUNOQyxNQUFPLFNBRVhDLE1BQU8sSUFDUEMsUUFBUyxFQUNUbEIsUUFBUyxDQUNMbUIsTUFBTyxrQkFDUEMsS0FBTSxvQkFFVmpCLE9BQVEsQ0FDSmtCLEVBQUcsR0FDSEMsRUFBRyxLQUlQYixJQUNBQyxFQUFjSSxVQUFVQyxLQUFPLE1BQy9CTCxFQUFjSSxVQUFVRSxNQUFRLFNBQ2hDTixFQUFjUCxPQUFPbUIsRUFBSSxJQUc3QnZFLEVBQUV1RCxPQUFPLENBQUVDLFFBQVNBLEdBQVdHLEdGRG5DM0QsRUFBRSxXQUVFQSxFQUFFLDBDQUEwQzBCLEdBQUcsUUFBUyxTQUFTOEMsR0FDN0RBLEVBQUVDLGlCQUVGLElBQU1DLEVBQVUxRSxFQUFFc0MsTUFBTXFDLEtBQUssUUFNN0IsT0FMQTlFLHVCQUF1QjJFLEVBQUVJLFFBQVFDLEtBQUssU0FBQ0MsR0FDL0JBLElBQ0FyRCxPQUFPc0QsU0FBU0MsS0FBT04sTUFHeEIsTUMwQmYxRSxFQUFFLDJCQUEyQjBCLEdBQUcsUUFBUyxTQUFTOEMsR0FDOUMsSUFBSVMsRUFBZWpGLEVBQUVzQyxNQUFNNEMsU0FBUyxvQkFBb0IsR0FFeERsRixFQUFFaUYsR0FBY0UsUUFBUSxXQUc1Qm5GLEVBQUUseUJBQXlCb0YsT0FBTyxTQUFVWixHQUN4QyxJQUFJYSxFQUFrQnJGLEVBQUVzQyxNQUFNNEMsU0FBUyxjQUFjLEdBQ3JEbEYsRUFBRXFGLEdBQWlCekUsS0FBS1osRUFBRXNDLE1BQU1nRCxNQUFNQyxNQUFNLE1BQU1DIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbmZpcm1EYW5nZXJvdXNBY3Rpb24oZWwpIHtcclxuICAgIGxldCAkZWwgPSAkKGVsKTtcclxuXHJcbiAgICBpZiAoISRlbC5pcygnYScpKSB7XHJcbiAgICAgICAgJGVsID0gJGVsLmNsb3Nlc3QoJ2EnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29uZmlybVRpdGxlID0gJ0FyZSB5b3Ugc3VyZT8nO1xyXG4gICAgaWYgKCRlbC5kYXRhKCdjb25maXJtLXRpdGxlJykpIHtcclxuICAgICAgICBjb25maXJtVGl0bGUgPSAkZWwuZGF0YSgnY29uZmlybS10aXRsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYW5nZXJNb2RlID0gdHJ1ZTtcclxuICAgIGlmICgkZWwuaGFzQ2xhc3MoJ2J0bi1zdWNjZXNzJykgfHwgJGVsLmhhc0NsYXNzKCdidG4tb3V0bGluZS1zdWNjZXNzJykpIHtcclxuICAgICAgICBkYW5nZXJNb2RlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8galF1ZXJ5IHRyaWNrIHRvIHB1bGwgYW4gaXRlbSdzIHRleHQgd2l0aG91dCBpbm5lciBIVE1MIGVsZW1lbnRzLlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODYyNDU5Mi9ob3ctdG8tZ2V0LW9ubHktZGlyZWN0LXRleHQtd2l0aG91dC10YWdzLXdpdGgtanF1ZXJ5LWluLWh0bWxcclxuICAgIGxldCBidXR0b25UZXh0ID0gJGVsLmNsb25lKCkuY2hpbGRyZW4oKS5yZW1vdmUoKS5lbmQoKS50ZXh0KCk7XHJcblxyXG4gICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgIHRpdGxlOiBjb25maXJtVGl0bGUsXHJcbiAgICAgICAgYnV0dG9uczogW3RydWUsIGJ1dHRvblRleHRdLFxyXG4gICAgICAgIGRhbmdlck1vZGU6IGRhbmdlck1vZGVcclxuICAgIH0pO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICQoJ2EuYnRuLWRhbmdlcixhLmJ0bltkYXRhLWNvbmZpcm0tdGl0bGVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlua1VybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgIGNvbmZpcm1EYW5nZXJvdXNBY3Rpb24oZS50YXJnZXQpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiIsImZ1bmN0aW9uIHN0eWxlRm9ybShmb3JtLCB0cmFuc2xhdGlvbnMpIHtcclxuXHJcbiAgICB2YXIgbGFuZyA9ICQuZXh0ZW5kKHt9LCB7XHJcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlNlbGVjdC4uLlwiLFxyXG4gICAgICAgIFwibm9fcmVzdWx0c1wiOiBcIk5vIHJlc3VsdHMgZm91bmQhXCIsXHJcbiAgICAgICAgXCJhZHZhbmNlZFwiOiBcIkFkdmFuY2VkXCJcclxuICAgIH0sIHRyYW5zbGF0aW9ucyk7XHJcblxyXG4gICAgdmFyICRmb3JtID0gJChmb3JtKTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdiZWZvcmV1bmxvYWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJ2lucHV0Om5vdChpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1zdWJtaXRdLGlucHV0W3R5cGU9cmVzZXRdLGlucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdKSx0ZXh0YXJlYSxzZWxlY3QnKS5hZGRDbGFzcygnZm9ybS1jb250cm9sJyk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnc2VsZWN0Jykud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiIC8+JykuY2hvc2VuKHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9zaW5nbGU6IGxhbmcucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogbGFuZy5wbGFjZWhvbGRlcixcclxuICAgICAgICBub19yZXN1bHRzX3RleHQ6IGxhbmcubm9fcmVzdWx0c1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXV0b3NpemUoJGZvcm0uZmluZCgndGV4dGFyZWEnKSk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1yYWRpb10nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZm9ybS1maWVsZCcpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwnKS5hZGRCYWNrKCkud3JhcEFsbCgnPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiIC8+Jyk7XHJcbiAgICB9KTtcclxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwnKVxyXG4gICAgICAgICAgICAuYWRkQmFjaygpXHJcbiAgICAgICAgICAgIC53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgLz4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrJykuYWRkQ2xhc3MoJ2Zvcm0tdGV4dCcpO1xyXG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2suZm9ybS1lcnJvcicpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrLmZvcm0tc3VjY2VzcycpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpO1xyXG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2suZm9ybS13YXJuaW5nJykucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy13YXJuaW5nJyk7XHJcblxyXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTQW5ub3RhdG9yXHJcbiAgICAkZm9ybS5maW5kKCdsYWJlbC5hZHZhbmNlZCxmaWVsZHNldC5hZHZhbmNlZCBsZWdlbmQnKVxyXG4gICAgICAgIC5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiPicrbGFuZy5hZHZhbmNlZCsnPC9zcGFuPiAnKTtcclxuXHJcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1zdWJtaXRdLGlucHV0W3R5cGU9cmVzZXRdJykuYWRkQ2xhc3MoJ2J0biBtLXQtMTAnKTtcclxuXHJcbiAgICAvLyBTY3JvbGwgdG8gZXJyb3JzLlxyXG4gICAgdmFyIGVycm9yX2ZpZWxkcyA9ICRmb3JtLmZpbmQoJy5oYXMtZXJyb3I6dmlzaWJsZScpO1xyXG4gICAgaWYgKGVycm9yX2ZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogZXJyb3JfZmllbGRzLmZpcnN0KCkub2Zmc2V0KCkudG9wIC0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCkgLSAxNVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuJCgnZm9ybSBidXR0b24uZmlsZS11cGxvYWQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXRbdHlwZT1maWxlXScpWzBdO1xyXG5cclxuICAgICQoaW5wdXRFbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xyXG59KTtcclxuXHJcbiQoJ2Zvcm0gaW5wdXRbdHlwZT1maWxlXScpLmNoYW5nZShmdW5jdGlvbiAoZSl7XHJcbiAgICBsZXQgZmlsZU5hbWVFbGVtZW50ID0gJCh0aGlzKS5zaWJsaW5ncygnLmZpbGUtbmFtZScpWzBdO1xyXG4gICAgJChmaWxlTmFtZUVsZW1lbnQpLnRleHQoJCh0aGlzKS52YWwoKS5zcGxpdCgnXFxcXCcpLnBvcCgpKTtcclxufSk7XHJcbiIsImZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlLCBtaW5pbWFsX2xheW91dCkge1xyXG5cclxuICAgIHZhciBncm93bFNldHRpbmdzID0ge1xyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgYWxsb3dfZGlzbWlzczogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnYnRuLXhzIGJ0bi1pbnZlcnNlIGFsaWduLXJpZ2h0JyxcclxuICAgICAgICBwbGFjZW1lbnQ6IHtcclxuICAgICAgICAgICAgZnJvbTogJ3RvcCcsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxheTogMTAwMDAsXHJcbiAgICAgICAgel9pbmRleDogOCxcclxuICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgIGVudGVyOiAnYW5pbWF0ZWQgZmFkZUluJyxcclxuICAgICAgICAgICAgZXhpdDogJ2FuaW1hdGVkIGZhZGVPdXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgeDogMjAsXHJcbiAgICAgICAgICAgIHk6IDg1XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobWluaW1hbF9sYXlvdXQpIHtcclxuICAgICAgICBncm93bFNldHRpbmdzLnBsYWNlbWVudC5mcm9tID0gJ3RvcCc7XHJcbiAgICAgICAgZ3Jvd2xTZXR0aW5ncy5wbGFjZW1lbnQuYWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICBncm93bFNldHRpbmdzLm9mZnNldC55ID0gMjA7XHJcbiAgICB9XHJcblxyXG4gICAgJC5ub3RpZnkoeyBtZXNzYWdlOiBtZXNzYWdlIH0sIGdyb3dsU2V0dGluZ3MpO1xyXG5cclxufVxyXG4iXX0=